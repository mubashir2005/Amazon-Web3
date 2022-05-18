import {Select, Button, Modal, Input} from 'antd'
import {ShoppingCartOutlined} from "@ant-design/icons";
import { useState } from 'react';
import { useMoralis } from 'react-moralis';
import price from "crypto-price"

const {Option} = Select;
function Purchase({book}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [delivery, setDelivery] = useState("");
  const {Moralis, account,chainId} = useMoralis();

  const handleOk = async () => {


    
    const options = {
        type: "native",
        receiver: "0x416EAB37d5450511F0326973a4E34102fe52bc28",
        amount: Moralis.Units.ETH("0.00076")
    };

    let result = await Moralis.transfer(options);


    //Save Transaction Details to DB
    const Transaction = Moralis.Object.extend("Transaction");
    const transaction = new Transaction();

    transaction.set("Customer", account);
    transaction.set("Delivery", delivery);
    transaction.set("Product", book.name);

    transaction.save()
    setIsModalVisible(false);
  }

  return (
   <div id={"purchase"}>
            <span className={"price"}>{book.price}ETH</span>
            <p>Excluding gas fees</p>
            <h1 style={{color:"green"}}>Available</h1>
            <Button className={"login"} style={{marginTop:"50px",width:"100%"}} onClick={()=>setIsModalVisible(true)}><ShoppingCartOutlined/> Buy Now</Button>
            <Modal title={"Pay Now"} visible={isModalVisible} onOk={handleOk} onCancel={()=>setIsModalVisible(false)} >
                <div style={{ display: "flex" }}>
                    <img src={book.image} alt="product" style={{ width: "200px" }}></img>
                    <div>
                        <h3>{book.name}</h3>
                        <h2>{book.price}ETH</h2>
                        <h4>Enter address for delivery.</h4>
                        <Input onChange={(value) => setDelivery(value.target.value)}></Input>
                    </div>
                </div>
            </Modal>
        </div>
  )
}

export default Purchase
