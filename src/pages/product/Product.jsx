import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Denúncia</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://cacavazamentonetbr.cdnstatic8.com/wp-content/uploads/2018/02/vazamento-de-agua-como-consertar.jpg" alt="" className="productInfoImg" />
                  <span className="productName">Tipo da denúncia</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Id:</span>
                      <span className="productInfoValue">1</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Cidade:</span>
                      <span className="productInfoValue">São Luís</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Endereço:</span>
                      <span className="productInfoValue">Rua X</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Status:</span>
                      <span className="productInfoValue">Pendente</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Observação</label>
                  <input type="text" placeholder="Escreva aqui." />
                  <label>Status</label>
                  <select name="active" id="active">
                      <option value="yes">Resolvido</option>
                      <option value="no">Pendente</option>
                      <option value="no">Negado</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://cacavazamentonetbr.cdnstatic8.com/wp-content/uploads/2018/02/vazamento-de-agua-como-consertar.jpg" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
