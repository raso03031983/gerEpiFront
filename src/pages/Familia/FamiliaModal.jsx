import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from './familia.action';
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

export default function AlertDialog(props) {
  const [formData, setFormData] = React.useState({
    "id" : props.itens.id,
    "descricao_Familia" : props.itens.descricao_Familia,
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
    if(props.param > 0 ){
      dispatch(Actions.put(1, formData));
    }else{

      var param = {
        "descricao_Familia": formData.descricao_Familia,
        "img_Familia": [],
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
        <DialogTitle id="alert-dialog-title">{props.title} Familia</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <GridContainer>
            <GridItem  xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Descrição"
                formControlProps={{ fullWidth: true }}
                name="descricao_Familia"
                value={formData.descricao_Familia}
                inputProps={{ name: 'descricao_Familia', value: formData.descricao_Familia, type: 'text' , onChange: handleChange('descricao_Familia') }}
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