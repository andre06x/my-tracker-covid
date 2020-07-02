import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa'
import axios from 'axios'


import { Container } from '../../../components/Container'
import { Span } from '../../../components/Span'


import { ContainerTable, Table } from '../../../components/Table/tableComponents'
import { List, Head } from './List'



export default class Cidades extends Component{
    state ={
        loading:true,
        content: '',
        states: ['MG','SP', 'RS', 'RJ', 'BA', 'PR', 'DF',  'ES',  'GO', 'MA', 'MT', 'MS', 'AC', 'PA', 'PB', 'CE', 'PE', 'PI', 'AM', 'RN', 'AP',  'RO',  'RR', 'SC', 'SE',  'TO',  'AL'],
        // states : ['AC','AL', 'AP', 'AM', 'BA', 'CE', 'DF',  'ES',  'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS',  'RO',  'RR', 'SC', 'SE',  'TO',  'SP', ],
        estado: '',
        loadingEstados: true,
        
    }

    async componentDidMount(){

        for(let i=0; i < this.state.states.length; i++){
            
                try{
                    setTimeout( async ()=> {
                        for(let j = 0; j < 6000; j++){}
                        let response = await axios.get(`https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=${this.state.states[i]}`, { timeout:15000})
                        await this.setState( { estado: this.state.states[i]})
                        // await console.log(this.state.estado)
            
                        let { results } = response.data
                        await this.setState({ content: [...this.state.content, results], loading: false})
            
                        await console.log(this.state.content)

                        if(this.state.content.length === 27){
                            console.log('chegou')
                            this.setState({ loadingEstados: false})
                        }

                    },3000)

                }catch(error){
                    alert('deu erro')
                    for(let j = 0; j < 10000; j++){}

                    let response2 = await axios.get(`https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=${this.state.states[i]}`, { timeout:15000})
                        await this.setState( { estado: this.state.states[i]})
                        // await console.log(this.state.estado)
            
                        let { results2 } = response2.data
                        await this.setState({ content: [...this.state.content, results2], loading: false})
            
                        await console.log(this.state.content)

                        if(this.state.content.length === 27){
                            console.log('chegou')
                            this.setState({ loadingEstados: false})
                        }

                }



        }

    }
    render(){
        const { loading, content, loadingEstados } = this.state
        return(
            <Container>
                <Span>
                    <Link to="/brasil" title="voltar">Voltar a seleção</Link>
                    <h1>Cidades</h1>
                </Span>

                <ContainerTable>
                    {loading ? (
                        <FaSpinner size={50}/>
                    ) : (
                        <>
                        {loadingEstados ?  <h1>
                                              <FaSpinner size={30}/> Carregando {this.state.estado}
                                        </h1>  : ''}
                        
                            <Table border="1">
                                <Head />
                                <tbody>
                                    {/* {content.map(c => c.map(cc => cc.city == 'Importados/Indefinidos' && <List key={String(cc.city)} {...cc} />) )} */}
                                    {content.map(c => c.map(cc => cc.city !== null  && <List key={String(cc.city)} {...cc} /> ) )}
                                </tbody>
                            </Table>
                        </>
                    )}
                </ContainerTable>

            </Container>
        )
    }
}