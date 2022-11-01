import styles from "../styles/transactionComponents/Transactions.module.scss"
import { Title } from "../components/Titles/Titles"
import MainContainer from "../components/Containers/MainContainer"
import AddTransactionsForm from "../components/transactionComponents/AddTransactionsForm"
import DeleteTransactionForm from "../components/transactionComponents/DeleteTransactionForm"


const Transactions = () => {
  
    return (
    <MainContainer>
        <Title>Transactions</Title>
        <AddTransactionsForm/>
        <DeleteTransactionForm/>
    </MainContainer>
  )
}

export default Transactions