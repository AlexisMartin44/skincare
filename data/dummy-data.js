// As long as I haven't set up a DB, we'll use this dummy data

import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'Ski Junior',
    'https://www.christysports.com/dw/image/v2/BGBB_PRD/on/demandware.static/-/Sites-master-winter/default/dw73729c44/0455146_000_2.jpg?sw=800&sh=800',
    'Conçu pour aider les petits skieurs à développer des bases solides, le Ski Junior est un ski de piste léger adapté aux niveaux débutant et intermédiaire.',
    50.00
  ),
  new Product(
    'p2',
    'Ski Senior',
    'https://images.cdn.snowleader.com/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/m/i/mirage_2020-configurable-lacroix-lacr00001.jpg',
    'En combinant la coupe d un ski de carving avec les actuelles largeurs sous le pied, le SKI SENIOR offre une puissante précision et une très bonne accroche incluant une stabilité et un contrôle accrus.',
    90.00
  ),
  new Product(
    'p3',
    'Free Surf',
    'https://images.cdn.snowleader.com/media/catalog/product/cache/1/image/0dc2d03fe217f8c83829496872af24a0/f/a/family-tree-pow-wrench-splitboard-2022-configurable-burton-burt01896_02.jpg',
    'Avec le free snow, rien ne peut stopper votre avancée. Toujours aussi agréable à rider, il reste l une des boards de freestyle les plus polyvalentes du marché.',
    640.00
  ),
  new Product(
    'p4',
    'Racing Surf',
    'https://www.burton.com/static/product/H22/23530100000155_1.png',
    "Destinée aux riders de niveaux intermédiaire à expert, la version splittée de la board à tout faire de Xavier est à la croisée de la jouabilité, de la progressivité et de la précision.",
    750.00
  )
];

export default PRODUCTS;
