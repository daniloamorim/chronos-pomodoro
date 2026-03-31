import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import {useState, useEffect } from 'react'

type AvailableThemes = 'dark' | 'light';

export function Menu () {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement,MouseEvent>,
    ) {
        event.preventDefault(); //Não segue o Link

        // console.log('Clicado', Date.now());
        setTheme(prevTheme => {
            const nextTheme = prevTheme ==='dark' ? 'light' : 'dark';
            return nextTheme;
        })

        //document.documentElement.setAttribute('data-theme', theme)
    }

    // useEffect(() =>{
    //     console.log('useEffect sem dependencias', Date.now())
    // }) //Executa todas as vezes que p componente renderiza na tela

    // useEffect(() =>{
    //     console.log('useEfffect com array dependencia vazio', Date.now())
    // }, []) //Executa apenas quando o React monta o componente na tela pela primeira vez

    useEffect(() => {
        console.log('Theme mudou', theme, Date.now());
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]) //Executa apenas quando o valor de theme muda 
    
    return (
        <nav className = { styles.menu }>
            <a className={ styles.menuLink } href='#' aria-label='Ir para a Home' title='Ir para a Home'>
                <HouseIcon />
            </a>
            <a className={ styles.menuLink } href='#' aria-label='Ver histórico' title='Ver histórico'>
                <HistoryIcon />
            </a>
            <a className={ styles.menuLink } href='#' aria-label='Configurações' title='Configurações'>
                <SettingsIcon />
            </a>
            <a className={ styles.menuLink } href='#' aria-label='Mudar Tema' title='Mudar Tema' onClick={handleThemeChange}>
                <SunIcon />
            </a>
        </nav>
    )
}