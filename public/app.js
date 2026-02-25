document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('patientData');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/api/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.message);
  });
});