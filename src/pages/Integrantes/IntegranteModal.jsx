import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormStyles, useSweetAlertStyle } from '../../Util/hooks';
import Actions from './integrante.action';
import Validator from './validator'
import md5 from 'md5';

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
import Select from '../../components/Select/Select';

export default function AlertDialog(props) {
  const { ListCargo = [] } = useSelector(state => state.Cargo);
  const { ListLocal = [] } = useSelector(state => state.Local);
  const { ListCentroCusto = [] } = useSelector(state => state.CentroCusto);
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({
    "id" : props.itens.id,
    "iD_Empresa" : props.itens.iD_Empresa,
    "matricula" : props.itens.matricula,
    "nome_Integrante" : props.itens.nome_Integrante,
    "iD_Cargo" : props.itens.iD_Cargo,
    "iD_Local" : props.itens.iD_Local,
    "iD_CentroCusto" : props.itens.iD_CentroCusto,
    "tipo_MO" : props.itens.tipo_MO,
    "situacao" : props.itens.situacao,
    "data_AdmissaoDesc" : props.itens.data_AdmissaoDesc,
    "data_DemissaoDesc" : props.itens.data_DemissaoDesc,
    "dtHor_CadastroDesc" : props.itens.dtHor_CadastroDesc,
    "dtHorUlt_AlteracaoDesc" : props.itens.dtHorUlt_AlteracaoDesc,
    "dtHor_UltAtualizacaoDesc" : props.itens.dtHor_UltAtualizacaoDesc,
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
        "iD_Empresa": 0,
        "matricula": formData.matricula,
        "nome_Integrante": formData.nome_Integrante,
        "iD_Cargo": formData.iD_Cargo,
        "iD_Local": formData.iD_Local,
        "iD_CentroCusto": formData.iD_CentroCusto,
        "data_Admissao": formData.data_Admissao,
        "data_Demissao": formData.data_Demissao,
        "situacao": formData.situacao,
        "tipo_MO": formData.tipo_MO,
        "dtHor_UltAtualizacao": formData.dtHor_UltAtualizacao,
        "img_Integrante": formData.img_Integrante,
        "PWD": md5("11"),
        "cracha": formData.cracha,
        "iD_UsuarioCadastro": formData.iD_UsuarioCadastro,
        "dtHor_Cadastro": formData.dtHor_Cadastro,
        "iD_UsuarioUltAlteracao": formData.iD_UsuarioUltAlteracao,
        "dtHorUlt_Alteracao": formData.dtHorUlt_Alteracao,
        "id_cliente": formData.id_cliente,
      }
      dispatch(Actions.post(param));
    }
  }

  const optionSituacao = [{ _id: "A", descricao: "ATIVO" } , { _id: "I", descricao: "INATIVO" }];
  const optionTipoMO = [{ _id: "D", descricao: "DIRETA" } , { _id: "I", descricao: "INDIRETA" }];

  return (
    <div>
      <Dialog
        open={props.open} 
        aria-labelledby="alert-dialog-title" 
        aria-describedby="alert-dialog-description"
        fullWidth="true"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">{props.title} Integrante</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <GridContainer>
            <GridItem  xs={8} sm={8} md={8}>
              <CustomInput
                error={errors.nome_Integrante}
                helpText={errors.nome_Integrante && <FormHelperText error>{errors.nome_Integrante}</FormHelperText>}
                labelText="Nome"
                formControlProps={{ fullWidth: true }}
                name="nome_Integrante"
                value={formData.nome_Integrante}
                inputProps={{ name: 'nome_Integrante', value: formData.nome_Integrante, type: 'text' , onChange: handleChange('nome_Integrante') }}
              />
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
              <CustomInput
                error={errors.matricula}
                helpText={errors.matricula && <FormHelperText error>{errors.matricula}</FormHelperText>}
                labelText="Matricula"
                formControlProps={{ fullWidth: true }}
                name="matricula"
                value={formData.matricula}
                inputProps={{ name: 'matricula', value: formData.matricula, type: 'text' , onChange: handleChange('matricula') }}
              />
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
              <Select
               error={errors.iD_Local}
               helpText={errors.iD_Local && <FormHelperText error>{errors.iD_Local}</FormHelperText>}
                options={ListLocal}
                labelKey="descricao_Local"
                valueKey="id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('iD_Local')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.iD_Local}
                labelText="Local" />
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
              <Select
               error={errors.iD_Cargo}
               helpText={errors.iD_Cargo && <FormHelperText error>{errors.iD_Cargo}</FormHelperText>}
                options={ListCargo}
                labelKey="descricao_Cargo"
                valueKey="id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('iD_Cargo')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.iD_Cargo}
                labelText="Cargo" />
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
              <Select
               error={errors.iD_CentroCusto}
               helpText={errors.iD_CentroCusto && <FormHelperText error>{errors.iD_CentroCusto}</FormHelperText>}
                options={ListCentroCusto}
                labelKey="descricao_CentroCusto"
                valueKey="id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('iD_CentroCusto')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.iD_CentroCusto}
                labelText="Centro de Custo" />
            </GridItem>
            <GridItem  xs={2} sm={2} md={2}>
              <Select
               error={errors.situacao}
               helpText={errors.situacao && <FormHelperText error>{errors.situacao}</FormHelperText>}
                options={optionSituacao}
                labelKey="descricao"
                valueKey="_id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('situacao')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.situacao}
                labelText="Situação" />
            </GridItem>
            <GridItem  xs={2} sm={2} md={2}>
              <Select
               error={errors.tipo_MO}
               helpText={errors.tipo_MO && <FormHelperText error>{errors.tipo_MO}</FormHelperText>}
                options={optionTipoMO}
                labelKey="descricao"
                valueKey="_id"
                formControlProps={{ fullWidth: true }}
                onChange={handleChange('tipo_MO')}
                MenuProps={{ className: classes.selectMenu }}
                classes={{ select: classes.select }}
                value={formData.tipo_MO}
                labelText="Mão de Obra" />
            </GridItem>
            <GridItem  xs={2} sm={2} md={2}>
              <CustomInput
                labelText="Admissão"
                formControlProps={{ fullWidth: true }}
                name="data_AdmissaoDesc"
                value={formData.data_AdmissaoDesc}
                inputProps={{ disabled: "true",  name: 'data_AdmissaoDesc', value: formData.data_AdmissaoDesc, type: 'text' , onChange: handleChange('data_AdmissaoDesc') }}
              />
            </GridItem>
            <GridItem  xs={2} sm={2} md={2}>
              <CustomInput
                labelText="Demissão"
                formControlProps={{ fullWidth: true }}
                name="data_DemissaoDesc"
                value={formData.data_DemissaoDesc}
                inputProps={{disabled: "true", name: 'data_DemissaoDesc', value: formData.data_DemissaoDesc, type: 'text' , onChange: handleChange('data_DemissaoDesc') }}
              />
            </GridItem>
            <GridItem  xs={2} sm={2} md={2}>
              <CustomInput
                labelText="Cadastro"
                formControlProps={{ fullWidth: true }}
                name="dtHor_CadastroDesc"
                value={formData.dtHor_CadastroDesc}
                inputProps={{disabled: "true", name: 'dtHor_CadastroDesc', value: formData.dtHor_CadastroDesc, type: 'text' , onChange: handleChange('dtHor_CadastroDesc') }}
              />
            </GridItem>
            <GridItem  xs={2} sm={2} md={2}>
              <CustomInput
                labelText="Atualizado"
                formControlProps={{ fullWidth: true }}
                name="dtHorUlt_AlteracaoDesc"
                value={formData.dtHorUlt_AlteracaoDesc}
                inputProps={{disabled: "true", name: 'dtHorUlt_AlteracaoDesc', value: formData.dtHorUlt_AlteracaoDesc, type: 'text' , onChange: handleChange('dtHorUlt_AlteracaoDesc') }}
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