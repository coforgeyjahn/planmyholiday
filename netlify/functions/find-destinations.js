const FREE_MODELS = [
  "openai/gpt-oss-120b",
  "openai/gpt-oss-20b"
];

async function callGroq(prompt, model) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  return { ok: response.ok, status: response.status, data };
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { prompt } = JSON.parse(event.body);

    if (!prompt) {
      return { statusCode: 400, body: JSON.stringify({ error: "Missing prompt" }) };
    }

    let lastError = null;

    for (const model of FREE_MODELS) {
      const result = await callGroq(prompt, model);

      if (result.ok) {
        const responseText = result.data.choices[0].message.content;
        return {
          statusCode: 200,
          body: JSON.stringify({ response: responseText })
        };
      }

      console.error(`Model ${model} failed:`, result.data);
      lastError = result.data;
    }

    return {
      statusCode: 503,
      body: JSON.stringify({ error: lastError?.error?.message || "All models unavailable, try again shortly" })
    };

  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to generate destinations" })
    };
  }
};