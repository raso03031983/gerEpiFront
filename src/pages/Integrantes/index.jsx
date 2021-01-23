import React from 'react';
import { useFormStyles, useSweetAlertStyle } from '../../Util/hooks';
import { useDispatch, useSelector } from 'react-redux';

import Actions from './integrante.action';
import ActionsCargo from '../Cargo/cargo.action';
import ActionsCentroCusto from '../CentroCusto/centrocusto.action';
import ActionsLocal from '../Local/local.action';
import IntegranteModal from './IntegranteModal'
import SenhaModal from './SenhaModal'

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SweetAlert from "react-bootstrap-sweetalert";

import CustomInput from '../../components/CustonIput/CustonInput'
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Card from '../../components/Card/Card'
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import CardBody from '../../components/Card/CardBody'
import Button from '../../components/Button/Button'
import Loading from '../../components/Loading/index'
import Table from '../../components/Table/Table'
import ReorderIcon from '@material-ui/icons/Reorder'; 
import AddBoxIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

function Integrantes() {
  const { ListIntegrante = [], nwstate, integrante, error } = useSelector(state => state.Integrante);
  const [formData, setFormData] = React.useState({});
  const [listTable, setListTable] = React.useState([]);
  const [modal, setModal] = React.useState(null);
  const [modalSenha, setModalSenha] = React.useState(null);
  const dispatch = useDispatch();
  const [alert, setAlert] = React.useState(null);

  const classes = {
    ...useFormStyles(),
    ...useSweetAlertStyle(),
  };

  React.useEffect(() => {
    var param = {
      "id_cliente": 1
    }
    dispatch(ActionsCargo.getAll(param));
    dispatch(ActionsCentroCusto.getAll(param));
    dispatch(ActionsLocal.getAll(param));
  }, []);

  React.useEffect(() => {
    if (ListIntegrante.length > 0) {
      const newListTable = ListIntegrante.map((item) => { 
        const { id, matricula, nome_Integrante, data_AdmissaoDesc, data_DemissaoDesc, situacaoDesc, } = item;
 
        return [ matricula, nome_Integrante, data_AdmissaoDesc, data_DemissaoDesc, situacaoDesc, 
                  <Button onClick={() => handleClickOpen(id) } color="primary" size="sm"><EditIcon /></Button>,
                  <Button onClick={() => handleClickOpenSenha(id) } color="warning" size="sm"><VpnKeyIcon /></Button>
               ];
      });
      setListTable(newListTable)
    }
  }, [ListIntegrante]);

  React.useEffect(() => {
    if(integrante == 'Realizado'){
      var param = {
        "id_cliente": 1
      }
      dispatch(Actions.getAll(param));
      handleClickCloseModal()
      toast.success("Ação Realizada com Sucesso !");
    }

    if(integrante == "erroInterno"){
      toast.error("Erro ao Realizar Ação !") 
    }

    if(integrante == "Matricula já cadastrada"){
      toast.warning("Matricula já cadastrada") 
    }

    if(integrante == "Senha Atual Incorreta"){
      toast.warning("Senha Atual Incorreta") 
    }
  }, [integrante]);

  React.useEffect(() => {
    if(error != null){
      toast.error("Erro ao Realizar Conexão com o Servidor !") 
    }
    dispatch(Actions.reset());
  }, [error]);

  const handleChange = name => event => {
    let val = event;
    if (event.target) {

      const { value, checked, type } = event.target;
      val = (type === 'checkbox') ? checked : value;

    }else if(event.constructor.name == "Object"){
      //caso seja passado um objeto para o formdata o value sempre sera o da primeira posição
      val = event[Object.keys(event)[0]]
    }
    setFormData({ ...formData, [name]: val });
  };

  const handleSerch = () => {
    var param = {
      "nome_Integrante" : formData.pesquisar,
      "id_cliente": 1
    }

    dispatch(Actions.getAll(param));
  }

  const handleClickOpen = (_id) => {
    setModal(
      <IntegranteModal
        open={true}
        modalSize={"xl"}
        param={_id}
        title={_id > 0 ? 'Editar' : 'Cadastrar'}
        onClose={<Button onClick={() => handleClickCloseModal()} color="default"> <CloseIcon /></Button>}
        itens={Itens(_id)}
      />)
  };

  const handleClickCloseModal = () => {
    setModal(null)
    setModalSenha(null)
  }

  const handleClickOpenSenha = (_id) => {
    setModalSenha(
      <SenhaModal
        open={true}
        modalSize={"xs"}
        param={_id}
        title={"Editar Senha"}
        onClose={<Button onClick={() => handleClickCloseModal()} color="default"> <CloseIcon /></Button>}
        itens={Itens(_id)}
      />)
  };

  const handleClickDelete = (_id) => {
      setAlert(
        <SweetAlert
        info
        title="Deseja Realmente Excluir o Registro ?"
        onConfirm={() => handleClickConfirmDelete(_id)}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={
          classes.button + " " + classes.info
        }
      >
      </SweetAlert>
    );
  }

  const hideAlert = () => {
    setAlert(null)
  }

  const handleClickConfirmDelete = (_id) => {
    var param = {
      "id": _id,
      "id_cliente": 1
    }
    dispatch(Actions.del(param));
    hideAlert();
  };

  const Itens = id => {

    const data = ListIntegrante.find(resp => resp.id === id);

    const _itens = {
      id: id,
      iD_Empresa: data === undefined ? "" : data.iD_Empresa,
      matricula: data === undefined ? "" : data.matricula,
      nome_Integrante: data === undefined ? "" : data.nome_Integrante,
      iD_Cargo: data === undefined ? "" : data.iD_Cargo,
      iD_Local: data === undefined ? "" : data.iD_Local,
      iD_CentroCusto: data === undefined ? "" : data.iD_CentroCusto,
      situacao: data === undefined ? "" : data.situacao,
      tipo_MO: data === undefined ? "" : data.tipo_MO,
      data_AdmissaoDesc: data === undefined ? "" : data.data_AdmissaoDesc,
      data_DemissaoDesc: data === undefined ? "" : data.data_DemissaoDesc,
      dtHor_CadastroDesc: data === undefined ? "" : data.dtHor_CadastroDesc,
      dtHorUlt_AlteracaoDesc: data === undefined ? "" : data.dtHorUlt_AlteracaoDesc,
      dtHor_UltAtualizacaoDesc: data === undefined ? "" : data.dtHor_UltAtualizacaoDesc,
     
    
    };
    return _itens;
  }

  return (
    <>
    <Loading active={nwstate === 'FETCHING'} />
    <ToastContainer />
    {modal}
    {modalSenha}
    {alert}
     <Card>
      <CardHeader color="info" icon>
          <CardIcon color="info">
            <AccountBoxIcon />
          </CardIcon>
          <h2 className={classes.cardIconTitle}>Integrantes</h2>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem  xs={12} sm={12} md={8}>
              <CustomInput
                labelText="Pesquisar"
                formControlProps={{ fullWidth: true }}
                name="pesquisar"
                value={formData.pesquisar}
                inputProps={{ name: 'Pesquisar', value: formData.pesquisar, type: 'text', onChange: handleChange('pesquisar') }} />
            </GridItem>
            <GridItem  xs={12} sm={12} md={4}>
              <br/>
              <Button onClick={() => handleSerch() } color="default" size="sm"> <SearchIcon /></Button>
              <Button onClick={() => handleClickOpenSenha()} color="primary" size="sm"> <AddBoxIcon /></Button>
            </GridItem>
          </GridContainer>
        </CardBody>
     </Card>
    
     {listTable != null && listTable.length > 0 &&
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="info" icon>
                  <CardIcon color="info">
                    <ReorderIcon />
                  </CardIcon>
                  <h4 className={classes.cardIconTitle}>{listTable.length} registro(s) encontrado(s)</h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <Table
                        tableHeaderColor="danger"
                        tableHead={["Matricula", "Nome", "Admissão", "Demissão", "Situação", ""]}
                        tableData={listTable}
                        coloredColls={[]}
                        colorsColls={["primary"]}
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        }
    </>
 
  );
}

export default Integrantes