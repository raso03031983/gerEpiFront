import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormStyles, useSweetAlertStyle } from '../../Util/hooks';
import Actions from './equip.action';
import ActionsGrade from '../GradeTamanho/grade.action';
import Validator from './validator'

import DoneIcon from '@material-ui/icons/Done';
import Button from '../../components/Button/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import CustomInput from '../../components/CustonIput/CustonInput'
import Select from '../../components/Select/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function AlertDialog(props) {
  const [errors, setErrors] = React.useState({});
  const { ListFamilia = [] } = useSelector(state => state.Familia);
  const { ListDivisao = [] } = useSelector(state => state.Divisao);
  const { ListCategoria = [] } = useSelector(state => state.Categoria);
  const { ListGradeTamanho = [] } = useSelector(state => state.Grade);

  const classes = {
    ...useFormStyles(),
    ...useSweetAlertStyle(),
  };

  React.useEffect(() => {
    changeGrade(props.itens.iD_Divisao) 
  }, []);

  const changeGrade = (_idDivisao) => {
    var param2 = {
      "id_cliente": 1,
      "id_divisao": _idDivisao
    }

    dispatch(ActionsGrade.getAll(param2));
  };

  const [formData, setFormData] = React.useState({
    "id" : props.itens.id,
    "descricao_Equipamento" : props.itens.descricao_Equipamento,
    "iD_Grade" : props.itens.iD_Grade.toString(),
    "unidade_Equipamento" : props.itens.unidade_Equipamento,
    "iD_Familia" : props.itens.iD_Familia,
    "iD_Divisao" : props.itens.iD_Divisao,
    "iD_Categoria" : props.itens.iD_Categoria,
    "equipamento_EmbMultipla" : props.itens.equipamento_EmbMultipla,
    "status" : props.itens.status.toString(),
    "mobile" : props.itens.mobile.toString(),
    "id_cliente": 1
  });
  
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

    if(name == "iD_Divisao"){
      changeGrade(val)
    }


  };

  const dispatch = useDispatch();

  const SaveUpdate = () => {

    const { fields: errors, hasError } = Validator(formData);
    if (hasError) {
      return setErrors(errors);
    }

    if(props.param > 0 ){
      dispatch(Actions.put(formData));
    }else{

      var param = {
        "descricao_Equipamento": formData.descricao_Equipamento,
        "iD_Grade": formData.iD_Grade,
        "unidade_Equipamento": formData.unidade_Equipamento,
        "iD_Familia": formData.iD_Familia,
        "iD_Divisao": formData.iD_Divisao,
        "iD_Categoria": formData.iD_Categoria,
        "equipamento_EmbMultipla": formData.equipamento_EmbMultipla,
        "status": formData.status,
        "iD_Grade": formData.iD_Grade,
        "mobile": formData.mobile,
        "id_cliente": formData.id_cliente
      }

      dispatch(Actions.post(param));
    }
  }

  const optionSelect = [{ _id: "1", descricao: "SIM" } , { _id: "0", descricao: "NÃO" }];
  const optionSelect2 = [{ _id: 'S', descricao: "SIM" } , { _id: 'N', descricao: "NÃO" }];

  return (
    <div>
      <Dialog
        open={props.open} 
        aria-labelledby="alert-dialog-title" 
        aria-describedby="alert-dialog-description"
        fullWidth={props.modalSize}
      >
        <DialogTitle id="alert-dialog-title">{props.title} Equipamentos</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <GridContainer>
            <GridItem  xs={12} sm={12} md={12}>
              <CustomInput
               error={errors.descricao_Equipamento}
               helpText={errors.descricao_Equipamento && <FormHelperText error>{errors.descricao_Equipamento}</FormHelperText>}
                labelText="Descrição"
                formControlProps={{ fullWidth: true }}
                name="descricao_Divisao"
                value={formData.descricao_Equipamento}
                inputProps={{ name: 'descricao_Equipamento', value: formData.descricao_Equipamento, type: 'text' , onChange: handleChange('descricao_Equipamento') }}
              />
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
              <Select
               error={errors.iD_Familia}
               helpText={errors.iD_Familia && <FormHelperText error>{errors.iD_Familia}</FormHelperText>}
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
            <GridItem  xs={4} sm={4} md={4}>
              <Select
               error={errors.iD_Divisao}
               helpText={errors.iD_Divisao && <FormHelperText error>{errors.iD_Divisao}</FormHelperText>}
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
            <GridItem  xs={4} sm={4} md={4}>
              <Select
               error={errors.iD_Categoria}
               helpText={errors.iD_Categoria && <FormHelperText error>{errors.iD_Categoria}</FormHelperText>}
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
            <GridItem  xs={4} sm={4} md={4}>
              <Select
               error={errors.status}
               helpText={errors.status && <FormHelperText error>{errors.status}</FormHelperText>}
                options={optionSelect}
                labelKey="descricao"
                valueKey="_id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('status')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.status}
                labelText="Ativo" />
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
              <Select
               error={errors.mobile}
               helpText={errors.mobile && <FormHelperText error>{errors.mobile}</FormHelperText>}
                options={optionSelect}
                labelKey="descricao"
                valueKey="_id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('mobile')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.mobile}
                labelText="Mobile" />
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
              <Select
               error={errors.equipamento_EmbMultipla}
               helpText={errors.equipamento_EmbMultipla && <FormHelperText error>{errors.equipamento_EmbMultipla}</FormHelperText>}
                options={optionSelect2}
                labelKey="descricao"
                valueKey="_id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('equipamento_EmbMultipla')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.equipamento_EmbMultipla}
                labelText="Mult. Embalagem" />
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
              <Select
               error={errors.iD_Grade}
               helpText={errors.iD_Grade && <FormHelperText error>{errors.iD_Grade}</FormHelperText>}
                options={ListGradeTamanho}
                labelKey="tamanho"
                valueKey="id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('iD_Grade')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.iD_Grade}
                labelText="Tamanho" />
            </GridItem>
          </GridContainer>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="success"  onClick={() => SaveUpdate() }> <DoneIcon /></Button>
          {props.onClose}
        </DialogActions>
      </Dialog>
    </div>
  );
}