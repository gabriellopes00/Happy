//React Imports
    //React    
        import React from 'react';
    //Icons
        import { FiPlus } from 'react-icons/fi';
    //Link
        import { Link } from 'react-router-dom';
    //Styles and images
        import mapMarker from '../Images/map-marker.svg';
        import '../styles/pages/orphanages-map.css'
    //Map
        import { Map, TileLayer } from 'react-leaflet';
        import 'leaflet/dist/leaflet.css'

//Page Function
    function OrphanagesMap() {
        return (
            <div id="page-map">
                <aside>
                    <header>
                        <img src={mapMarker} alt="Happy"/>
                        <h2>Escolha um orfanato no mapa</h2>
                        <p>Muitas crianças estão esperando a sua visita :)</p>
                    </header>
                    <footer>
                        <strong>Jundiaí</strong>
                        <span>São Paulo</span>
                    </footer>
                </aside>

                <Map
                center={[-23.1863168,-46.8977055]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
                ><TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/></Map>

                <Link to="" className="create-orphanage">
                    <FiPlus size={32} color="#fff"/>
                </Link>
            </div>
        )
    }

export default OrphanagesMap;