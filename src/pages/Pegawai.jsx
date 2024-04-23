/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import { Modal, Button, Form } from "react-bootstrap";
import Layout from "../components/layout";
import { BACKEND_API } from "../../constants";

class Pegawai extends Component {
  constructor() {
    super();
    this.state = {
      pegawai: [], // array pegawai untuk menampung data pegawai
      nip: "",
      nama: "",
      alamat: "",
      action: "",
      search: "",
      isModalOpen: false,
    };
  }

  bind = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({
      isModalOpen: false,
    });
    $("#modal").modal("hide");
  };

  Add = () => {
    // mengosongkan isi variabel nip, nama, dan alamat
    // set action menjadi "insert"
    this.setState({
      isModalOpen: true,
      nip: Math.floor(Math.random() * 101) + 100,
      nama: "",
      alamat: "",
      action: "insert",
    });
  };

  Edit = (item) => {
    /*
    - mengisikan isi variabel nip, nama, alamat sesuai dengan data yang
    akan diedit
    - set action menjadi "update"
    */
    this.setState({
      isModalOpen: true,
      nip: item.nip,
      nama: item.nama,
      alamat: item.alamat,
      action: "update",
    });
  };

  getPegawai = () => {
    let url = BACKEND_API + "/pegawai";
    // mengakses api untuk mengambil data pegawai
    axios
      .get(url)
      .then((response) => {
        // mengisikan data dari respon API ke array pegawai
        this.setState({ pegawai: response.data.pegawai });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  findPegawai = (event) => {
    let url = BACKEND_API + "/pegawai";
    if (event.keyCode === 13) {
      // menampung data keyword pencarian
      let form = {
        find: this.state.search,
      };
      // mengakses api untuk mengambil data pegawai
      // berdasarkan keyword
      axios
        .post(url, form)
        .then((response) => {
          // mengisikan data dari respon API ke array pegawai
          this.setState({ pegawai: response.data.pegawai });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  SavePegawai = (event) => {
    event.preventDefault();
    let url = "";
    if (this.state.action === "insert") {
      url = BACKEND_API + "http://54.167.166.153:2910/pegawai/save";
    } else {
      url = BACKEND_API + "/pegawai/update";
    }

    let form = {
      nip: this.state.nip,
      nama: this.state.nama,
      alamat: this.state.alamat,
    };
    axios
      .post(url, form)
      .then((response) => {
        this.getPegawai();
        this.handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  Drop = (nip) => {
    let url = BACKEND_API + "/pegawai/" + nip;
    // memanggil url API untuk menghapus data pada database
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      axios
        .delete(url)
        .then((response) => {
          // jika proses hapus data berhasil, memanggil data yang terbaru
          this.getPegawai();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  componentDidMount() {
    // method yang pertama kali dipanggil pada saat load page
    this.getPegawai();
  }

  render() {
    return (
      <Layout>
        <div className="m-3 card">
          <div className="card-header bg-info text-white">Data Pegawai</div>
          <div className="card-body">
            <input
              type="text"
              className="form-control mb-2"
              name="search"
              value={this.state.search}
              onChange={this.bind}
              onKeyUp={this.findPegawai}
              placeholder="Pencarian..."
            />
            {/* tampilan tabel pegawai */}
            <table className="table">
              <thead>
                <tr>
                  <th>NIP</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pegawai.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.nip}</td>
                      <td>{item.nama}</td>
                      <td>{item.alamat}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-info m-1"
                          data-toggle="modal"
                          data-target="#modal"
                          onClick={() => this.Edit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger m-1"
                          onClick={() => this.Drop(item.nip)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button
              className="btn btn-success"
              onClick={this.Add}
              data-toggle="modal"
              data-target="#modal"
            >
              Tambah Data
            </button>
            {/* modal form pegawai */}
            <Modal show={this.state.isModalOpen}>
              <Modal.Header>
                <Modal.Title>Form Pegawai</Modal.Title>
              </Modal.Header>
              {/* <Form onSubmit={e=>this.handleSave(e)}> */}
              <Form onSubmit={(e) => this.SavePegawai(e)}>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="nip">
                    <Form.Label>NIP</Form.Label>
                    <Form.Control
                      type="number"
                      name="nip"
                      readOnly
                      value={this.state.nip}
                      onChange={this.bind}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control
                      type="text"
                      name="nama"
                      value={this.state.nama}
                      onChange={this.bind}
                      className="form-control"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="alamat">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control
                      type="text"
                      name="alamat"
                      value={this.state.alamat}
                      onChange={this.bind}
                      className="form-control"
                      required
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Pegawai;
