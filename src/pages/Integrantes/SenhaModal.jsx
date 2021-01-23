import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from './integrante.action';
import Validator from './validatorSenha'
import md5 from 'md5';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [formData, setFormData] = React.useState({ });
  const dispatch = useDispatch();

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

  const SaveUpdate = () => {

    const { fields: errors, hasError } = Validator(formData);
    if (hasError) {
      return setErrors(errors);
    }

    if(formData.senha_nova != formData.senha_conf){
      toast.warning("Nova senha e Confirmação de senha devem ser iguais") 
      return false;
    }

    var senhaNova = md5(formData.senha_nova);
    var senhaAtual = md5(formData.senha_atual);
    
    var param = {
      "senha_atual": senhaAtual,
      "senha_nova": senhaNova,
      "idUser": props.param
    }

    dispatch(Actions.postSenha(param));
    
  }

  return (
    <div>
      <ToastContainer />
      <Dialog
        open={props.open} 
        aria-labelledby="alert-dialog-title" 
        aria-describedby="alert-dialog-description"
        fullWidth={props.modalSize}
      >
        <DialogTitle id="alert-dialog-title">Atualizar Senha</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <GridContainer>
            <GridItem  xs={12} sm={12} md={12}>
              <CustomInput
                error={errors.senha_atual}
                helpText={errors.senha_atual && <FormHelperText error>{errors.senha_atual}</FormHelperText>}
                labelText="Senha Atual"
                formControlProps={{ fullWidth: true }}
                name="senha_atual"
                value={formData.senha_atual}
                inputProps={{ name: 'senha_atual', value: formData.senha_atual, type: 'text' , onChange: handleChange('senha_atual') }}
              />
            </GridItem>
            <GridItem  xs={12} sm={12} md={12}>
              <CustomInput
                error={errors.senha_nova}
                helpText={errors.senha_nova && <FormHelperText error>{errors.senha_nova}</FormHelperText>}
                labelText="Nova Senha"
                formControlProps={{ fullWidth: true }}
                name="senha_nova"
                value={formData.senha_nova}
                inputProps={{ name: 'senha_nova', value: formData.senha_nova, type: 'text' , onChange: handleChange('senha_nova') }}
              />
            </GridItem>
             <GridItem  xs={12} sm={12} md={12}>
              <CustomInput
                error={errors.senha_conf}
                helpText={errors.senha_conf && <FormHelperText error>{errors.senha_conf}</FormHelperText>}
                labelText="Confirmação de Senha"
                formControlProps={{ fullWidth: true }}
                name="senha_conf"
                value={formData.senha_conf}
                inputProps={{ name: 'senha_conf', value: formData.senha_conf, type: 'text' , onChange: handleChange('senha_conf') }}
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