"use client"
import React from 'react'
import { useParams, useRouter } from "next/navigation";
import { getItem } from '@/utils/storage';
import { Image as DatoImage } from "react-datocms"
import { removeEspecialCharacter } from '@/utils/refactor';


export default function Category() {
  const categories = getItem('categories')
  const navigate = useRouter()
  return (
    <div>
      {categories?.map(category => {
        return (
          <div
            onClick={() => navigate.push(`/produtos/categorias/${removeEspecialCharacter(category.name)}`)}
          >
            <p>{category.name}</p>
            <DatoImage data={category.image.responsiveImage} />
          </div>
        )
      })}
    </div>
  )
}
