<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\RestFul\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\SigninModel;
use App\Models\VerifyModel;

class SigninController extends ResourceController
{
    public function index()
    {
        //
    }

    /*public function signin()
    {
        $username = $this->request->getVar("username");
        $password = $this->request->getVar("password");
        $sin = new SigninModel();
        $data  = $sin->where('username', $username)->first();
        if($data){
            $pass = $data['password'];
            $authenticatedPassword = password_verify($password, $pass);
            if($authenticatedPassword){
                return $this->respond(['msg' => 'okay'], 200);
            }else{
                return $this->respond(['msg' => 'invalid password'], 200);
            }
        }else{
            return $this->respond(['msg' => 'no user found'], 200);
        }
    }*/

    public function signin() 
    { 
      $user = new SigninModel(); 
      $username = $this->request->getVar('username');
      $fullname = $this->request->getVar('fullname');
      $position = $this->request->getVar('position');
      $usertpye = $this->request->getVar('usertype');
      $password = $this->request->getVar('password'); 
      $status = $this->request->getVar('status');
      $data = $user->where('username', $username)->first();

      if($data){
        $pass = $data['password']; 
        $authenticatePassword = password_verify($password, $pass); 
        if($authenticatePassword){ 
          return $this->respond(['msg' => 'okay', 'token' => $data['token'], 'fullname' => $data['fullname'], 'position' => $data['position'], 'usertype' => $data['usertype'], 'status' => $data['status']]);
        }else{ 
          return $this->respond(['msg' => 'Incorrect Pasword']);
        } 
      }else{
          return $this->respond(['msg' => 'no user found']);
      }
    }

    public function signup()
    {
      $user = new SigninModel(); 
      $token = $this->verification(50); 
      $data = [ 
        'username' => $this->request->getVar('username'),
        'fullname' => $this->request->getVar('fullname'),
        'position' => $this->request->getVar('position'),
        'email' => $this->request->getVar('email'),
        'password' => password_hash($this->request->getVar('password'),PASSWORD_DEFAULT), 
        'token' => $token
      ]; 
      $u = $user->save($data); 
      if($u){ 
        return $this->respond(['msg' => 'okay', 'token' =>$token]); 
      }else{ 
        return $this->respond(['msg' => 'failed']); 
      } 
    } 

    public function verification($length){ 
        $str_result = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; 
        return substr(str_shuffle($str_result), 
        0, $length); 
    }

    public function getVerify()
    {
      $verify = new VerifyModel();
      $data = $verify->findAll();
      return $this->respond($data, 200);
    }
    
    public function updateStatus()
    {
        $requestData = $this->request->getJSON();
        $id = $requestData->id;
        $newStatus = $requestData->status; // Added this line to get the new status

        $allowedStatuses = ['Approved', 'Declined']; // Define allowed statuses

        if (!in_array($newStatus, $allowedStatuses)) {
            return $this->respond(['error' => 'Invalid status'], 400);
        }

        $verifyModel = new VerifyModel();
        $verifyModel->update($id, ['status' => $newStatus]);

        return $this->respond(['message' => 'Status updated successfully'], 200);
    }
}