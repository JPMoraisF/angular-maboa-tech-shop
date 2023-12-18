import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { IProduct, IProductCart } from 'src/app/core/interfaces/products';
import { ProductsService } from 'src/app/core/services/products.service';
import { IOffer } from 'src/app/core/interfaces/offers';

@Component({
  selector: 'app-details-offers-product',
  templateUrl: './details-offers-product.component.html',
  styleUrls: ['./details-offers-product.component.css']
})
export class DetailsOffersProductComponent implements OnInit {
  product: IProduct | undefined;
  quantity = 1;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productsService.getOne(productId);
    this.product?.offers?.[0]?.discount;
  }

  addToCart() {
    this.notificationService.notify("The product has been added to the cart!");
    const product: IProductCart = {
      ...this.product!, ///// a exclamação foi utilizada para fazer a definição do product
      quantity: this.quantity
    };
    this.cartService.addToCart(product);
  }

}


// this.product = products
//                         .filter((product) => product.offers?.length > 0);
