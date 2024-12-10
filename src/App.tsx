import TextInput from "./TextInput/TextInput";

function App() {
  return (
    <>
      <div>
        <TextInput
          label="name"
          placeholder="text here..."
          backgroundColor="red"
        />

        <TextInput
          label="adress"
          placeholder="text here..."
          backgroundColor="green"
        />
      </div>
    </>
  );
}

export default App;
