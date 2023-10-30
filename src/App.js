import styled from "styled-components";
import InvoiceForm from "./components/invoice-form/invoice-form";
import './components/style.css'
const InvoiceWrapper = styled.div``;

const App = () => {
  return (
    <>
      <InvoiceWrapper>
        <InvoiceForm />
      </InvoiceWrapper>
    </>
  );
};

export default App;
