import Background from './components/Background/Background';
import Content from './components/Content/Content';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Background>
        <>
          <Header />
          <Content>This is content</Content>
        </>
      </Background>
    </div>
  );
}

export default App;
