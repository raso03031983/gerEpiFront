import React from 'react';
import { useFormStyles, useSweetAlertStyle } from '../../Util/hooks';
import { useDispatch, useSelector } from 'react-redux';

import Actions from './familia.action';
import FamiliaModal from './FamiliaModal'

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
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import Table from '../../components/Table/Table'
import ReorderIcon from '@material-ui/icons/Reorder'; 
import AddBoxIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';


function Familia(){
  const { ListFamilia = [], nwstate, familia, error } = useSelector(state => state.Familia);
  const [formData, setFormData] = React.useState({});
  const [listTable, setListTable] = React.useState([]);
  const [modal, setModal] = React.useState(null);
  const dispatch = useDispatch();
  const [alert, setAlert] = React.useState(null);

  const classes = {
    ...useFormStyles(),
    ...useSweetAlertStyle(),
  };

  React.useEffect(() => {
    if (ListFamilia.length > 0) {
      const newListTable = ListFamilia.map((item) => { 
        const { id, descricao_Familia } = item;
 
        return [ id, descricao_Familia, 
                  <Button onClick={() => handleClickOpen(id) } color="primary" size="sm"><EditIcon /></Button>,
                  <Button onClick={() => handleClickDelete(id) } color="danger" size="sm"><DeleteIcon /></Button>
               ];
      });
      setListTable(newListTable)
    }
  }, [ListFamilia]);

  React.useEffect(() => {
    if(familia == 'Realizado'){
      var param = {
        "id_cliente": 1
      }
      dispatch(Actions.getAll(param));
      handleClickCloseModal()
      toast.success("Ação Realizada com Sucesso !");
    }

    if(familia == "erroInterno"){
      toast.error("Erro ao Realizar Ação !") 
    }
  }, [familia]);

  React.useEffect(() => {
    if(error != null){
      toast.error("Erro ao Realizar Conexão com o Servidor !") 
    }
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
      "descricao_Familia" : formData.pesquisar,
      "id_cliente": 1
    }
    dispatch(Actions.getAll(param));
  }

  const handleClickOpen = (_id) => {
    setModal(
      <FamiliaModal
        open={true}
        modalSize={"lg"}
        param={_id}
        title={_id > 0 ? 'Editar' : 'Cadastrar'}
        onClose={<Button onClick={() => handleClickCloseModal()} color="default"> <CloseIcon /></Button>}
        itens={Itens(_id)}
      />)
  };

  const handleClickCloseModal = () => {
    setModal(null)
  }

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

    const data = ListFamilia.find(resp => resp.id === id);

    const _itens = {
      id: id,
      descricao_Familia : data === undefined ? "" : data.descricao_Familia,
    };
    return _itens;
  }

  return (
    <>
    <Loading active={nwstate === 'FETCHING'} />
    <ToastContainer />
    {modal}
    {alert}
     <Card>
      <CardHeader color="info" icon>
          <CardIcon color="info">
            <FeaturedPlayListIcon />
          </CardIcon>
          <h2 className={classes.cardIconTitle}>Familia</h2>
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
              <Button onClick={() => handleClickOpen(0)} color="primary" size="sm"> <AddBoxIcon /></Button>
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
                        tableHead={["Cód.", "Descrição", ""]}
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

export default Familia