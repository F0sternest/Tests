import "../Styles/card.css";

function Card({ img }) {
    return (
        <div className="card">
            <img src={img} alt="Placeholder Image" />
            <div className="card-info">
                <h1>Title</h1>
                <div className="line" />
                <p>Description</p>
                <div className="card-btn-container">
                    <button>Shop Men</button>
                    <button>Shop Women</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
