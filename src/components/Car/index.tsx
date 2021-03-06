import React from 'react';

import GasolineSvg from '../../assets/gasoline.svg';

import * as S from './styles';


interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  },
  thumbnail: string;
}

interface Props {
  data: CarData;
}



export function Car({ data }: Props){
  return(
    <S.Container>
      <S.Detail>
        <S.Brand>
          {data.brand}
        </S.Brand>
        <S.Name>
          {data.name}
        </S.Name>

        <S.About>
          <S.Rent>
            <S.Period>Ao Dia </S.Period>
            <S.Price>{`R$ ${data.rent.price}`}</S.Price>
          </S.Rent>

          <S.Type>
            <GasolineSvg />
          </S.Type>
        </S.About>
      </S.Detail>

      <S.CarImage source={{ uri: data.thumbnail }} />
    </S.Container>
  );
}