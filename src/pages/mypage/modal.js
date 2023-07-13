import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalHead, NftBox } from "./modalstyle";
import CateModal from "./catemodal";
import { catestate } from "../../redux/reducer/modalSlice";

const MyModal = ({data}) => {
  const dispatch = useDispatch();
  const ImgData = useSelector(state => state.product.data);
  const Cate = useSelector((state) => state.deal.cate);

  return (
    <Modal>
      {Cate ?
      <CateModal />
      : null}
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
            return (
              <button onClick={()=>{dispatch(catestate())}}>
                <img src={item.image} alt="nft-img"></img>
              </button>
            );
          })
        ) : (
          <span>이미지소스가 필요합니다.</span>
        )}
      </NftBox>
    </Modal>
  );
}

export default MyModal;