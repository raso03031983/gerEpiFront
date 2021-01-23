import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormStyles, useSweetAlertStyle } from '../../Util/hooks';
import Actions from './classificacao.action';
import Validator from './validator'

import DoneIcon from '@material-ui/icons/Done';
import Button from '../../components/Button/Button'
import Select from '../../components/Select/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import FormHelperText from '@material-ui/core/FormHelperText';

export default function AlertDialog(props) {
  const { ListFamilia = [] } = useSelector(state => state.Familia);
  const { ListDivisao = [] } = useSelector(state => state.Divisao);
  const { ListCategoria = [] } = useSelector(state => state.Categoria);
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({
    "id" : props.itens.id,
    "iD_Familia" : props.itens.iD_Familia,
    "iD_Divisao" : props.itens.iD_Divisao,
    "iD_Categoria" : props.itens.iD_Categoria,
    "id_cliente": 1
  });

  const classes = {
    ...useFormStyles(),
    ...useSweetAlertStyle(),
  };

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
        "iD_Familia": formData.iD_Familia,
        "iD_Divisao": formData.iD_Divisao,
        "iD_Categoria": formData.iD_Categoria,
        "id_cliente": formData.id_cliente
      }

      dispatch(Actions.post(param));
    }
  }

  return (
    <div>
      <Dialog
        open={props.open} 
        aria-labelledby="alert-dialog-title" 
        aria-describedby="alert-dialog-description"
        fullWidth={props.modalSize}
      >
        <DialogTitle id="alert-dialog-title">{props.title} Classificação</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <GridContainer>
            <GridItem  xs={12} sm={12} md={12}>
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
            <GridItem  xs={12} sm={12} md={12}>
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
            <GridItem  xs={12} sm={12} md={12}>
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