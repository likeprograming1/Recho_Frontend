import { useSelector } from "react-redux";
import { Modal, ModalHead, NftBox } from "./modalstyle";

const MyModal = ({data}) => {
  const ImgData = useSelector(state => state.product.data);
  console.log(ImgData);

  return (
    <Modal>
      <ModalHead>
        <span>증명서</span>
        <button className="close" onClick={() => data(false)}>
          x
        </button>
      </ModalHead>
      <hr></hr>
      <NftBox>
        {ImgData.length !== 0 ? (
          ImgData.map((item) => {
            console.log(item);
            return <img src={item.image} alt="nft-img"></img>;
          })
        ) : (
          <span>이미지소스가 필요합니다.</span>
        )}
      </NftBox>
    </Modal>
  );
}

export default MyModal;