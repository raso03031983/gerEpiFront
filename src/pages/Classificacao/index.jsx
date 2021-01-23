import React from 'react';
import { useFormStyles, useSweetAlertStyle } from '../../Util/hooks';
import { useDispatch, useSelector } from 'react-redux';

import ActionsFam from '../Familia/familia.action';
import ActionsDiv from '../Divisao/divisao.action';
import ActionsCat from '../Categoria/categoria.action';
import ActionsCla from './classificacao.action';
import ClassificacaoModal from './ClassificacaoModal'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SweetAlert from "react-bootstrap-sweetalert";

import CustomInput from '../../components/CustonIput/CustonInput'
import Select from '../../components/Select/Select';
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

function Classificacao() {
  const { ListClassificacao = [], nwstate, classificacao, error } = useSelector(state => state.Classificacao);
  const { ListFamilia = [] } = useSelector(state => state.Familia);
  const { ListDivisao = [] } = useSelector(state => state.Divisao);
  const { ListCategoria = [] } = useSelector(state => state.Categoria);
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
    var param = {
      "id_cliente": 1
    }
    dispatch(ActionsFam.getAll(param));
    dispatch(ActionsDiv.getAll(param));
    dispatch(ActionsCat.getAll(param));
  }, []);

  React.useEffect(() => {
    if (ListClassificacao.length > 0) {
      const newListTable = ListClassificacao.map((item) => { 
        const { id, iD_Familia, iD_Divisao, iD_Categoria, descricao_Familia, descricao_Divisao, descricao_Categoria } = item;
 
        return [ id, descricao_Familia, descricao_Divisao, descricao_Categoria,
                  <Button onClick={() => handleClickOpen(id) } color="primary" size="sm"><EditIcon /></Button>,
                  // <Button onClick={() => handleClickDelete(id) } color="danger" size="sm"><DeleteIcon /></Button>
               ];
      });
      setListTable(newListTable)
    }
  }, [ListClassificacao]);

  React.useEffect(() => {
    if(classificacao == 'Realizado'){
      var param = {
        "id_cliente": 1
      }
      dispatch(ActionsCla.getAll(param));
      handleClickCloseModal()
      toast.success("Ação Realizada com Sucesso !");
    }

    if(classificacao == "erroInterno"){
      toast.error("Erro ao Realizar Ação !") 
    }
  }, [classificacao]);

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
      "iD_Familia" : formData.iD_Familia,
      "iD_Divisao" : formData.iD_Divisao,
      "iD_Categoria" : formData.iD_Categoria,
      "id_cliente": 1
    }
    dispatch(ActionsCla.getAll(param));
  }

  const handleClickOpen = (_id) => {
    setModal(
      <ClassificacaoModal
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
    dispatch(ActionsCla.del(param));
    hideAlert();
  };

  const Itens = id => {

    const data = ListClassificacao.find(resp => resp.id === id);

    const _itens = {
      id: id,
      iD_Familia : data === undefined ? "" : data.iD_Familia,
      iD_Divisao : data === undefined ? "" : data.iD_Divisao,
      iD_Categoria : data === undefined ? "" : data.iD_Categoria,
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
          <h2 className={classes.cardIconTitle}>Classificação</h2>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem  xs={12} sm={12} md={3}>
              <Select
                options={ListFamilia}
                labelKey="descricao_Familia"
                valueKey="id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('iD_Familia')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.iD_Familia}
                labelText="Familia" />
            </GridItem>
            <GridItem  xs={12} sm={12} md={3}>
              <Select
                options={ListDivisao}
                labelKey="descricao_Divisao"
                valueKey="id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('iD_Divisao')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.iD_Divisao}
                labelText="Divisão" />
            </GridItem>
            <GridItem  xs={12} sm={12} md={3}>
              <Select
                options={ListCategoria}
                labelKey="descricao_Categoria"
                valueKey="id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('iD_Categoria')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.iD_Categoria}
                labelText="Categoria" />
            </GridItem>
            <GridItem  xs={12} sm={12} md={3}>
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
                        tableHead={["Cód.", "Familia", "Divisão", "Categoria", ""]}
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

export default Classificacao