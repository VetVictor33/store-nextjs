"use client"
import React from 'react'
import { useParams } from "next/navigation";

export default function Category() {
    const params = useParams();
    return (
        <div>-----{params.categoryName}----</div>
    )
}
