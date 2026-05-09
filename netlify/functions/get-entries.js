const { getStore } = require('@netlify/blobs');

exports.handler = async () => {
  try {
    const store = getStore({ name: 'journal', consistency: 'strong' });
    const data = await store.get('entries');
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: data || '[]'
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
