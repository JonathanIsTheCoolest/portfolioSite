export const sendEmail = async (
  url,
  formContent,
  setSubmissionError,
  setSubmissionModal
) => {
  try {
    const results = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formContent),
    });
    const data = await results.json();
    if (data.ok) {
      setSubmissionError(false);
    } else {
      setSubmissionError(true);
    }
  } catch (err) {
    console.error(`Ooooops there was an error: ${err}`);
    setSubmissionError(true);
  }
  setSubmissionModal(true);
};
