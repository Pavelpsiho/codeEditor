export function executeCode(requestBody: { language: string; code: string }) {
  const { language, code } = requestBody;

  // Моковые данные: если код содержит "error", возвращаем ошибку
  if (code.includes('error')) {
    return {
      status: 'error',
      error: `Syntax error in ${language}: an unexpected sign.`,
    };
  }

  // Моковые данные успешного выполнения кода
  return {
    status: 'success',
    output: `The code ran successfully: ${code}`,
  };
}