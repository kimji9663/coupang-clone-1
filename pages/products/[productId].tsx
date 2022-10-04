import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "@emotion/styled"

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 980px;
  margin: 0 auto;
`
const ProdImage = styled.div`
  width: 45%;

  & .prod-image__detail {
    width: 410px;
  }
`
const ProdBuy = styled.div`
  width: 55%;

  & .total-price {
    color: #ae0000;
    font-size: 20px;
    line-height: 21px;
    font-weight: bold;
  }
  & .shipping-fee-list {
    margin-top: 16px;
    .radio-list-item {
      display: block;
    }
  }
  & .prod-buy-quantity {
    display: flex;
    margin-top: 16px;
  }
  & .prod-quantity {
    display: flex;
    width: 83px;
    & .count {
      width: 70%;
    }
    & .buttons {
      width: 30%;
    }
    & .buttons > button {
      width: 100%;
    }
  }
`
const BrandOtherProducts = styled.div`
  width: 100%;
`

export default function VendoritemPage() {
  const router = useRouter()
  const [count, setCount] = useState(0)
  //console.log(router.query.itemId, router.query.vendoritemId);

  useEffect(() => {
    setCount(0)
  }, [router.query.productId])

  return (
    <>
      <Container>
        <ProdImage>
          <img className="prod-image__detail" src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/7873652494331447-2ae0b33d-defa-4d17-a181-2235683b01bd.jpg" data-tti="true" data-preload-img-src="//thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2020/06/02/19/7/ecc9ad6c-1938-49aa-a3e6-85cae33dd8da.jpg" alt="detail image" data-load-time="550.4000000953674" data-load-time-start="387.30000019073486" data-load-time-end="508.40000009536743" data-zoom-image-url="//image8.coupangcdn.com/image/retail/images/7873652494331447-2ae0b33d-defa-4d17-a181-2235683b01bd.jpg"></img>
        </ProdImage>
        <ProdBuy>
          <h2>단골언니 투버클 베이직 이네딧 슬리퍼 {router.query.productId}</h2>
          <div className="prod-price">
            <span className="total-price">12,750원</span>
          </div>

          <div className="shipping-fee-list">
            <label className="radio-list-item SHIPPING_FEE_NUDGE_DISPLAY_0 selected">
              <span className="radio-button">
                <input type="radio" name="" id="shippong_fee_0" />
              </span>
              <span className="shipping-fee-list-item inline-flex-v-center"><em className="prod-txt-bold">로켓배송 상품 19,800원 이상 무료배송</em></span>
            </label>
            <label className="radio-list-item SHIPPING_FEE_NUDGE_DISPLAY_1 ">
              <span className="radio-button">
                <input type="radio" name="" id="shippong_fee_1" />
              </span>
              <span className="shipping-fee-list-item inline-flex-v-center">
                <em className="prod-txt-bold">무료배송 + 무료반품</em>
                <em className="separator">|</em>
                <em className="icon-tx">로켓와우 신청시</em>
                <em><i className="rocket-falcon-icon question-mark-rocket-plus"></i></em>
              </span>
            </label>
          </div>

          <div className="prod-buy-quantity">
            <div className="prod-quantity">
              <p className="count">수량: {count}</p>
              <div className="buttons">
                <button type="button" onClick={() => setCount(count - 1)}>-</button>
                <button type="button" onClick={() => setCount(count + 1)}>+</button>
              </div>
            </div>
            <button type="button">장바구니 담기</button>
            <button type="button">바로구매</button>
          </div>
        </ProdBuy>

        <BrandOtherProducts>
          <h4>이 브랜드의 다른 상품들</h4>
          <Link href="/products/1">
            <a>Apple 아이폰 13 mini 자급제</a>
          </Link>
          <br />
          <Link href="/products/2">
            <a>단골언니 투버클 베이직 이네딧 슬리퍼</a>
          </Link>
        </BrandOtherProducts>
      </Container>
    </>
  );
}
