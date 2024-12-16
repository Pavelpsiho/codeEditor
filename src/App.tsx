import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor.tsx';
import LanguageSelector from './components/LanguageSelector.tsx';
import RunButton from './components/RunButton.tsx';
import Output from './components/Output.tsx';
import TaskDescription from './components/TaskDescription.tsx';
import axios from 'axios';

const App: React.FC = () => {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRun = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/execute', { language, code});
      if (response.data.status === 'success') {
        setResult(response.data.output);
      } else {
        setResult(`Error: ${response.data.error || 'Unknown error occurred.'}`);
      }
    } catch (error:any) {
      setResult(`Server error: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="app">
          <div className="task-container">
            <TaskDescription />
          </div>
          <div className="editor-container">
            <div className="top-controls">
              <LanguageSelector selectedLanguage={language} onSelect={setLanguage} />
            </div>
          <div className="code-editor">
            <CodeEditor language={language} code={code} setCode={setCode} />
          </div>
          <div className="bottom-controls">
            <RunButton onClick={handleRun} isLoading={isLoading} />
          </div>
          <div className="output-container">
            <Output result={result} />
          </div>
        </div>
      </div>
      )};

export default App;
