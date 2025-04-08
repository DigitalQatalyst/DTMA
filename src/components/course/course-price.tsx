import { formatPrice } from "@/lib/format-price";
import { discountPrice } from "@/utils";

type IProps = {
    // discount: number;
    // price: number;
    credits: string
}

export default function CoursePrice({ credits }: IProps) {
    return (
        // discount > 0 ? (
        //     <>
        //         <del>{formatPrice(price, true)}</del>
        //         <span>{" "}{formatPrice(discountPrice(price, discount), true)}</span>
        //     </>
        // ) : (
        //     <span>{formatPrice(price, true)}</span>
        // )

      
          <span className="credits">{credits} credits</span>
     
    )
}
