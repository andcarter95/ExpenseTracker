import styles from "../../styles/transactionComponents/AddTransactionsForm";

import { Title } from "../Titles/Titles";

import { useEffect, useState } from "react";
import { useCategoriesGet } from "../../queries/category"
import { useTransactionPost } from "../../queries/transaction"
import { DateTime } from "luxon"
import { queryClient } from "../../constants/config";


const AddTransactionsForm = () => {
    const [title, setTitle] = useState("");
    const [money, ssetMoney] = useState("");
    const [date, setDate] = useState(DateTime.now().toISODate());
    const [info, setInfo] = useState("")
    const [category, setCategory] = useState(10);
  
    return (
    <div>AddTransactionsForm</div>
  )
}

export default AddTransactionsForm