import axios from 'axios';

const apiCidadesPorEstados = axios.create({
  baseURL: `https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=`,
});

export default apiCidadesPorEstados;
