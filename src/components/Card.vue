<template>
<div>

 <v-card

    class="mx-auto my-12"
    max-width="374"
    v-for="item in commentApi" :key="item.class_id"
    :to="{
          name: 'Comment',
          params: {id:item.class_id},
     }"
    
    
>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="item.img"
    ></v-img>

    <v-card-title>{{item.title}}</v-card-title>
    <v-card-text>污染平均</v-card-text>
    
    <v-card-text>
      
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="item.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="30"
        ></v-rating>

        <div class="grey--text ms-4">
         {{item.rating}}
        </div>
      </v-row>

     
   
    </v-card-text>


  </v-card>
</div>  
</template>

<script>
 export default {
   props:{
     commentApi:{
       type:Array
     }
   }
 }  
</script>