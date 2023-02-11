import React, { Component } from "react";
import ReactDOM from "react-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const products = [
  { id: 321, name: "Item list", price: 100 },
  { id: 256, name: "Item list", price: 102 }
];




export class OrderStatus extends Component {
  
  constructor() {
   
    super();
    this.state = {
      show: false,
      isOpen: false,
      // For displaying data
      columns: [
        {
          dataField: "id",
          text: "Order Id",
          sort: true
        },
        {
          dataField: "name",
          text: "Name",
          sort: true
        },
        {
          dataField: "price",
          text: "Product Price"
        },
        {
          dataField: "follow",
          text: "View Details",
          formatter: this.linkFollow,
          sort: true
        }
      ],
      isFollow: true
    };

    this.onFollowChanged.bind(this);
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  
  onFollowChanged() {
    this.setState({ isFollow: !this.state.isFollow });
    console.log(this.state.isFollow);
  }

  linkFollow = (cell, row, rowIndex, formatExtraData) => {
    return (
      <Button
        onClick={() => {
         this.openModal();
          this.onFollowChanged(row);
        }}
      >
        Confirm Order
      </Button>
    );
  };

  render() {    
  
    return (
      <div style={{ padding: "20px" }}>
        <h1 className="h2">Online Orders</h1>
        <BootstrapTable
          keyField="id"
          data={products}
          columns={this.state.columns}
        />
         <>
  
      <Modal
        show={this.state.isOpen}
        onHide={this.closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Number #321</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Order Details will be shown here.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={this.closeModal}>
            Accept
          </Button>
          <Button variant="primary" onClick={this.closeModal}>Reject</Button>
        </Modal.Footer>
      </Modal>
    </>
      </div>
    );
  }
}

    