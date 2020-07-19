import Vue from 'vue'

Vue.filter('sentence-capitalize', (sentence: string): string => 
  sentence
    .split(/[\s|\-]/)
    .map(word => (word[0] || '').toUpperCase() + word.slice(1))
    .join(' ')
)