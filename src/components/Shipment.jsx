import React, { Component } from 'react';

class Shipment extends Component {
    render() {
        const { total } = this.props;
        const shipping = total > 0 && total < 500 ? 350 : 99;
        const shippingNeon =
            shipping === 99 ? (
                <span className="font-effect-neon total_wrap-cheap">
                    {shipping} ₽
                </span>
            ) : (
                <span>{shipping} ₽</span>
            );
        console.log(total, '  ', total > 0);
        return (
            <div className="total">
                <div className="total_wrap">
                    <div>
                        <div>Доставка: {total > 0 ? shippingNeon : null}</div>
                        <div className="total_wrap-free">
                            {total < 500
                                ? `Закажите ещё ${
                                      500 - total
                                  } ₽ для доставки за 99 ₽`
                                : null}
                        </div>
                    </div>

                    <div className="total_wrap-final">{total} ₽</div>
                </div>
            </div>
        );
    }
}

export default Shipment;
