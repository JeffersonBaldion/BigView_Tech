import userIcon from "../../assets/userIcon.svg"
import cartIcon from "../../assets/cartIcon.svg"
import searchIcon from "../../assets/searchIcon.svg"
import { useNavigate } from "react-router-dom"

import style from "./Header.module.css"
import React from "react"

export default function Header(){
    const navigate = useNavigate()
    const [search, setSearch] = React.useState("")
    const handleSetSearch = (e)=>{
        setSearch(e.target.value)
        if(e.key === 'Enter'){
            handleSearchClick()
        }
    }

    const handleSearchClick = () => {
        if(search !== ""){
            navigate(`/catalogo?search=${search}`)
            window.location.reload()
        }
    }

    return(
        <div className={style.headerContainer}>
            <div className={style.logoContainer}>
                <a href="/">Logo</a>
            </div>
            <div className={style.menuContainer}>
                <a href="/">Home</a>
                <a href="/catalogo">Catalogo</a>
                <a href="/catalogo">Contacto</a>
                <img src={cartIcon} alt="" />
                <img src={userIcon} alt="" />
                <div className={style.searchBarContainer}>
                    <input onKeyDown={handleSetSearch} onChange={handleSetSearch} value={search} type="text" />
                    <img onClick={handleSearchClick} src={searchIcon} alt="" />
                </div>
            </div>
        </div>
    )
}