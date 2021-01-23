import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from './fornecedor.action';
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
    "nome_Fornecedor" : props.itens.nome_Fornecedor,
    "nome_Fantasia" : props.itens.nome_Fantasia,
    "cnpj" : props.itens.cnpj,
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
        "nome_Fornecedor": formData.nome_Fornecedor,
        "nome_Fantasia": formData.nome_Fantasia,
        "cnpj": formData.cnpj,    
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
        <DialogTitle id="alert-dialog-title">{props.title} Fornecedor</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <GridContainer>
            <GridItem  xs={12} sm={12} md={12}>
                <CustomInput
                error={errors.nome_Fornecedor}
                helpText={errors.nome_Fornecedor && <FormHelperText error>{errors.nome_Fornecedor}</FormHelperText>}
                  labelText="Razão Social"
                  formControlProps={{ fullWidth: true }}
                  name="nome_Fornecedor"
                  value={formData.nome_Fornecedor}
                  inputProps={{ name: 'nome_Fornecedor', value: formData.nome_Fornecedor, type: 'text' , onChange: handleChange('nome_Fornecedor') }}
                />
            </GridItem >
            <GridItem  xs={12} sm={12} md={12}>
                <CustomInput
                error={errors.nome_Fantasia}
                helpText={errors.nome_Fantasia && <FormHelperText error>{errors.nome_Fantasia}</FormHelperText>}
                  labelText="Fantasia"
                  formControlProps={{ fullWidth: true }}
                  name="nome_Fornecedor"
                  value={formData.nome_Fantasia}
                  inputProps={{ name: 'nome_Fantasia', value: formData.nome_Fantasia, type: 'text' , onChange: handleChange('nome_Fantasia') }}
                />
            </GridItem >
            <GridItem  xs={12} sm={12} md={12}>
              <CustomInput
              error={errors.cnpj}
              helpText={errors.cnpj && <FormHelperText error>{errors.cnpj}</FormHelperText>}
                labelText="CNPJ"
                formControlProps={{ fullWidth: true }}
                name="cnpj"
                value={formData.cnpj}
                inputProps={{ name: 'cnpj', value: formData.cnpj, type: 'text' , onChange: handleChange('cnpj') }}
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