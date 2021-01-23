import { combineReducers } from "redux";

import Categoria from "./Categoria";
import Classificacao from "./Classificacao";
import Divisao from "./Divisao";
import Equipamentos from "./Equipamentos";
import Familia from "./Familia";
import Fornecedor from "./Fornecedor";
import GSE from "./GSE";
import Integrante from "./Integrante";
import Grade from "./Grade_Tamanho";
import Cargo from "./Cargo";
import CentroCusto from "./CentroCusto";
import Local from "./Local";

export default combineReducers({
  Categoria,
  Classificacao,
  Divisao,
  Equipamentos,
  Familia,
  Fornecedor,
  GSE,
  Integrante,
  Grade,
  Cargo,
  CentroCusto,
  Local,
});
