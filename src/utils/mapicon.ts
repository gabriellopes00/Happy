//imports
    import Leaflet from 'leaflet';

    import mapMarkerImg from '../Images/map-marker.svg';

//Map icon 
    const mapIcon = Leaflet.icon({
        iconUrl: mapMarkerImg,

        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [0, -60]
    })

export default mapIcon;