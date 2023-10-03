import './EventItem.css';

const EventItem = () => {
    return (
        <div className="eventItem">
            <div className="image-container">
                <img src="https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="image img-fluid" />
            </div>
            <h3 className="title">Noche a las estrellas</h3>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque culpa distinctio laboriosam nemo! Quidem, consectetur, voluptate consequuntur placeat hic labore modi quo obcaecati explicabo soluta velit. Sequi, dolor tenetur.
            </div>
        </div>
    );
}
export default EventItem;