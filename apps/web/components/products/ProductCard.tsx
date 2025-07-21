'use client';

import Link from 'next/link';

import { PAGE_ROUTES } from '@/constants';
import { useCurrentPrice } from '@/hooks/products';
import type { ProductStatus } from '@/types';

import { formatRelativeTime } from '@/utils/date';

import ProductThumb from './ProductThumb';

interface ProductCardProps {
  productId: number;
  title: string;
  imgUrl: string;
  startPrice: number;
  minPrice: number;
  decreaseUnit: number;
  auctionStartedAt: string;
  decreaseInterval: number;
  status: ProductStatus;
  viewCount?: number;
  createdAt: string;
  region: string;
  bidderUserId: string;
}

const ProductCard = ({
  productId,
  imgUrl,
  title,
  startPrice,
  minPrice,
  decreaseUnit,
  auctionStartedAt,
  decreaseInterval,
  status,
  region,
  bidderUserId,
  createdAt,
}: ProductCardProps) => {
  const currentPrice = useCurrentPrice({
    startPrice,
    minPrice,
    decreaseUnit,
    auctionStartedAt,
    decreaseInterval,
  });

  return (
    <Link href={PAGE_ROUTES.PRODUCTS.DETAIL(productId.toString())}>
      <article
        className="bg-white flex items-center gap-md p-sm rounded-[20px]"
        aria-label={`${title}, 경매 중, 현재가 ${currentPrice}, 지역 ${region}`}
      >
        <ProductThumb
          imgUrl={imgUrl}
          title={title}
          status={status}
          bidderUserId={bidderUserId}
          width="w-[80px]"
        />

        <section className="flex flex-col gap-sm">
          <h3 className="font-normal text-base line-clamp-2">{title}</h3>
          <p className="font-style-large">현재가 {currentPrice.toLocaleString()}원</p>
          <p className="text-xs flex items-center gap-xs  text-text-info">
            {region}
            <i>•</i>
            {formatRelativeTime(createdAt)}
          </p>
        </section>
      </article>
    </Link>
  );
};

export default ProductCard;
