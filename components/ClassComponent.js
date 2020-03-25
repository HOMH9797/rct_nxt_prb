
export default (props) => (
    <div id="clase-container">
        <div>
            <h2>Clase de {props.nombreClase}</h2>
            {props.estudiantes.map(item => {
                return (
                    <div key={item.id} className="clase-list">
                        <img src={item.photo} alt="" />
                        <p>{item.first_name}  {item.last_name}</p>
                    </div>
                )
            })}
            <style jsx>
                {
                    `
                        #clase-container{
                            perspective:500;
                        }
                        .clase-list{
                            display:flex;
                        }
                        .clase-list img{
                            padding:3px;
                            border:1px solic #ccc;
                        }
                        .clase-list p{
                            font-size:14px;
                            font-weight:bold;
                            font-style:italic;
                            margin-left:12px;
                        }
                        .clase-list:hover{
                            transform:translateY(10px)scale(1);
                        }
                    `
                }
            </style>
        </div>
    </div>
)