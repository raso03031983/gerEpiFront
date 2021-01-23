import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from './local.action';
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
import FormHelperText from '@material-ui/core/FormHelperText';

export default function AlertDialog(props) {
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({
    "id" : props.itens.id,
    "descricao_Divisao" : props.itens.descricao_Divisao,
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
        "descricao_Divisao": formData.descricao_Divisao,
        "img_Divisao": [],
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
        <DialogTitle id="alert-dialog-title">{props.title} Divisão</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <GridContainer>
            <GridItem  xs={12} sm={12} md={12}>
              <CustomInput
                error={errors.descricao_Divisao}
                helpText={errors.descricao_Divisao && <FormHelperText error>{errors.descricao_Divisao}</FormHelperText>}
                labelText="Descrição"
                formControlProps={{ fullWidth: true }}
                name="descricao_Divisao"
                value={formData.descricao_Divisao}
                inputProps={{ name: 'descricao_Divisao', value: formData.descricao_Divisao, type: 'text' , onChange: handleChange('descricao_Divisao') }}
              />
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