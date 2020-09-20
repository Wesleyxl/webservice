<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Product;
use Validator;

class ProductController extends Controller
{
    public function __construct() {

        // definindo timezone e data/hora atual
        date_default_timezone_set('America/Sao_Paulo');
        $this->today = strtotime('now');

    }

    // listado todos os produtos
    public function index() {

        return response(Product::all());

    }

    // listando um produto específico
    public function show($id) {

        return response(Product::find($id));

    }

    public function Store(Request $request) {

        //validando dados recebidos
        $validator = Validator::make( $request->all(), [

            'nome' => 'required|string|min:03',
            'descrição' => 'required|string',
            'texto' => 'required|string|max:300'

        ] );

        // retornando possíveis erros da validação
        if ( $validator->fails() ) {

            return response()->json(['errors' => $validator->errors()]);

        }

        // armazenando dados no banco
        $product = New Product();
        $product['name'] = $request['nome'];
        $product['description'] = $request['descrição'];
        $product['text'] = $request['texto'];

        if ( $product->save() ) {

            return response()->json(['status' => true]);

        }

    }

    // atualizando produtos
    public function update(Request $request, $id) {


        // validando os dados recebidos
        $validator = Validator::make( $request->all(), [

            'nome' => 'required|string',
            'descrição' => 'required|string|min:03',
            'texto' => 'required|string|min:05'

        ] );

        // retornando possíveis erros da validação
        if ( $validator->fails() ) {

            return response()->json(['errors' => $validator->errors()]);

        }

         // armazenando atualização no banco
        $product = Product::find($id);
        $product['name'] = $request->get('nome');
        $product['description'] = $request->get('descrição');
        $product['text'] = $request->get('texto');

        // retornando mensagem de sucesso
        if ( $product->save() ) {

            return response()->json(['status' => true]);    

        }

    }

    // apagando dados solicitados
    public function destroy($id) {

        $product = Product::find($id);
        
        if ( $product->delete() ) {

            return response()->json(['status' => true]);    
            
        }

    }

}
