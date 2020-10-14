//React Imports
    //React    
        import React, {useEffect, useState} from 'react';
    //Icons
        import { FiPlus, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
    //Link
        import { Link, useHistory } from 'react-router-dom';
    //Styles and images
        import mapMarker from '../Images/map-marker.svg';
        import '../styles/pages/orphanages-map.css';
        import mapIcon from '../utils/mapicon';
    //Map
        import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
        import 'leaflet/dist/leaflet.css';
    //Back-end connection
        import api from '../services/api';


interface Orphanage{
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

//Page Function
    function OrphanagesMap() {
        const {goBack} = useHistory();
        //State
        const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

        useEffect(()=>{ 
            api.get('orphanages').then(res =>{
                setOrphanages(res.data);
            })
        }, []);

        //Page
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
                        <button type="button" onClick={goBack}>
                            <FiArrowLeft size={24} color="#FFF" />
                        </button>
                    </footer>
                </aside>

                <Map
                center={[-23.1863168,-46.8977055]}//Coordinates
                zoom={13}
                style={{width: '100%', height: '100%'}}
                >

                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                    {
                        orphanages.map(orphanage =>{
                            return(
                                <Marker
                                    key={orphanage.id}
                                    icon={mapIcon}
                                    position={[orphanage.latitude, orphanage.longitude]}
                                >
                                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                        {orphanage.name}
                                        <Link to={`/orphanages/${orphanage.id}`}>
                                            <FiArrowRight size={20} color="#fff" />
                                        </Link>
                                    </Popup>
                                </Marker>
                            );
                        })
                    };

                </Map>

                <Link to="/orphanages/create" className="create-orphanage">
                    <FiPlus size={32} color="#fff"/>
                </Link>
            </div>
        );
    };

export default OrphanagesMap;