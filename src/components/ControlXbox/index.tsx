import control from "../../assets/banner/controle-xbox.svg";

function ControlXbox() {
  return (
    <div className="container">
      <div className="control-info">
        <h2>
          <span>Desempenho</span> aperfeiçoado
        </h2>
        <p>
          O controle sem fio Xbox traz um design elegante, conforto refinado e
          compartilhamento instantâneo para um favorito comum.
        </p>
      </div>
      <div>
        <img src={control} alt="" />
      </div>
    </div>
  );
}

export default ControlXbox;
